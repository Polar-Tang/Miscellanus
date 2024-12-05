import requests
output_path = "urlList.txt"
acc = []

def get_company_url(company_name, api_key):
    search_url = "https://serpapi.com/search.json"
    params = {
        "q": company_name,
        "location": "United States",
        "hl": "en",
        "gl": "us",
        "api_key": api_key
    }
    
    response = requests.get(search_url, params=params)
    results = response.json()
    
    try:
        first_result = results['organic_results'][0]
        return first_result['link']
    except (IndexError, KeyError):
        return None

def process_companies_list(companies_list, api_key):
    company_urls = {}
    for company in companies_list:
        url = get_company_url(company, api_key)
        if url:
            company_urls[company] = url
            print(f"Found URL for {company}: {url}")
            with open(output_path, 'a') as file:
                file.write(url)
        else:
            print(f"Could not find URL for {company}")

    return company_urls

api_key = "api_key" 
companies = ["companies_list"]

company_urls = process_companies_list(companies, api_key)