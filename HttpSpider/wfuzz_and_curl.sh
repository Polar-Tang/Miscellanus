#!/bin/bash

url_file="/home/nautilus/python/exersice/urlList.txt"

if [[ ! -f "$url_file" ]]; then
    echo "Error: URL file '$url_file' not found!"
    exit 1
fi

wordlist="/usr/share/seclists/Discovery/DNS/subdomains-top1million-110000.txt"


while IFS= read -r base_url; do
    [[ -z "$base_url" || "$base_url" =~ ^# ]] && continue

    domain=$(echo "$base_url" | awk -F/ '{print $3}')
    if [[ "$domain" == www.* ]]; then
        domain=${domain#www.}
    fi

    wfuzz_cmd="wfuzz -c --hc=403,404 -t 20 -w $wordlist -H 'Host: FUZZ.$domain' $base_url -vvv"
    echo "$wfuzz_cmd"

    echo "Running wfuzz for URL: $base_url"
    wfuzz_output=$(eval $wfuzz_cmd)

    echo "$wfuzz_output" | while read -r line; do
        # Extract the URL and status code
        url=$(echo "$line" | awk '{print $8}')
        status_code=$(echo "$line" | awk '{print $2}')

        # Check if the status code starts with 2 or 3
        if [[ $status_code =~ ^2|^3 ]]; then
            # Run the curl command
            curl_output=$(curl -Is --http2-prior-knowledge "$url" | head -1)

            # Check if the page supports HTTP/2
            if [[ "$curl_output" == *"HTTP/2"* ]]; then
                echo "URL: $url - Status: $status_code"
                echo "The page supports HTTP/2"
            else
                echo "URL: $url - Status: $status_code"
                echo "The page does NOT support HTTP/2 or there was no response"
            fi

            echo "---------------------------------"
        elif [[ -z "$status_code" ]]; then
            echo "No status code found for URL: $url. The request might have failed."
        fi
    done

done < "$url_file"




