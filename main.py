import requests

values = """
  {
    "name": "admin@test.com",
    "password": "1234"
  }
"""
headers = {
    'Content-Type': 'application/json'
}
request = requests.post('http://20.210.36.32:3000/v1/auth/tokens', data=values, headers=headers)

response_headers = request.headers
response_body = request.content
print("Response Headers "+str(response_headers))
print("Response Body " + str(response_body))
