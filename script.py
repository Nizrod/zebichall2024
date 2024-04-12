import requests
from bs4 import BeautifulSoup


def download_and_search(base_url, start_id, end_id, search_term):
    results = {}
    for page_id in range(start_id, end_id + 1):
        url = f"{base_url}{page_id}"
        try:
            response = requests.get(url)
            response.raise_for_status()  # Will raise an HTTPError if the HTTP request returned an unsuccessful status code
            soup = BeautifulSoup(response.text, "html.parser")
            results[page_id] = search_term in soup.get_text()
        except requests.RequestException as e:
            results[page_id] = f"Error: {e}"
    return results


# Usage
base_url = (
    "https://iench2rue.challengecyber.fr/toutou?id="  # Replace with your actual URL
)
start_id = 1
end_id = 60
search_term = "Khalid"
result = download_and_search(base_url, start_id, end_id, search_term)

for page_id, found in result.items():
    print(f"ID {page_id}: {'Found' if found else 'Not Found'}")
