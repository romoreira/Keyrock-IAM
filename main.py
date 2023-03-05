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
request = requests.post('http://51.13.21.139:3000/v1/auth/tokens', data=values, headers=headers)

response_body = request.headers
print("Response: "+str(response_body))
