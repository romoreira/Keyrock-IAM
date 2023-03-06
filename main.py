import requests

for i in range(10000):
  values = """
    {
      "name": "admin@test.com",
      "password": "1234"
    }
  """

  headers = {
    'Content-Type': 'application/json'
  }
  request = requests.post('http://20.81.90.222:3000/v1/auth/tokens', data=values, headers=headers)

  response_headers = request.headers
  response_body = request.content
  print("Response Headers "+str(response_headers))
  print("Response Body " + str(response_body))
