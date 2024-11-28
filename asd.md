PS C:\Users\ASUS\Desktop\greyhat> python3 .\look_for_name.py
PDF downloaded successfully.
Extracted text (first 500 characters):

No text found. Likely an image-based PDF.
Detected image-based PDF. Using OCR for text extraction...
Converting PDF pages to images for OCR...
Traceback (most recent call last):
  File "C:\Users\ASUS\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.12_qbz5n2kfra8p0\LocalCache\local-packages\Python312\site-packages\pdf2image\pdf2image.py", line 581, in pdfinfo_from_path
    proc = Popen(command, env=env, stdout=PIPE, stderr=PIPE)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Program Files\WindowsApps\PythonSoftwareFoundation.Python.3.12_3.12.2032.0_x64__qbz5n2kfra8p0\Lib\subprocess.py", line 1026, in __init__
    self._execute_child(args, executable, preexec_fn, close_fds,
  File "C:\Program Files\WindowsApps\PythonSoftwareFoundation.Python.3.12_3.12.2032.0_x64__qbz5n2kfra8p0\Lib\subprocess.py", line 1538, in _execute_child
    hp, ht, pid, tid = _winapi.CreateProcess(executable, args,
                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
FileNotFoundError: [WinError 2] El sistema no puede encontrar el archivo especificado

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "C:\Users\ASUS\Desktop\greyhat\look_for_name.py", line 101, in <module>
    pdf_text = extract_text_with_tesseract(pdf_file)
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\ASUS\Desktop\greyhat\look_for_name.py", line 74, in extract_text_with_tesseract
    images = convert_from_bytes(pdf_file.getvalue())
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\ASUS\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.12_qbz5n2kfra8p0\LocalCache\local-packages\Python312\site-packages\pdf2image\pdf2image.py", line 359, in convert_from_bytes
    return convert_from_path(
           ^^^^^^^^^^^^^^^^^^
  File "C:\Users\ASUS\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.12_qbz5n2kfra8p0\LocalCache\local-packages\Python312\site-packages\pdf2image\pdf2image.py", line 127, in convert_from_path
    page_count = pdfinfo_from_path(
                 ^^^^^^^^^^^^^^^^^^
  File "C:\Users\ASUS\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.12_qbz5n2kfra8p0\LocalCache\local-packages\Python312\site-packages\pdf2image\pdf2image.py", line 607, in pdfinfo_from_path
    raise PDFInfoNotInstalledError(
pdf2image.exceptions.PDFInfoNotInstalledError: Unable to get page count. Is poppler installed and in PATH?