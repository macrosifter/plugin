# # source /Users/tnappy/node_projects/quickstart/python/bin/activate
# from http.server import BaseHTTPRequestHandler
# # Read env vars from .env file
# # import base64
# import os
# # import datetime as dt
# # import json
# # import time

# # from dotenv import load_dotenv
# from flask import Flask, request, jsonify
# import plaid
# # from dotenv import load_dotenv
# # from flask import jsonify
# # from plaid.api import plaid_api
# # from plaid.model.country_code import CountryCode
# # from plaid.model.link_token_create_request import LinkTokenCreateRequest
# # from plaid.model.link_token_create_request_user import LinkTokenCreateRequestUser
# # from plaid.model.products import Products

# # load_dotenv()

# # # Fill in your Plaid API keys - https://dashboard.plaid.com/account/keys
# # PLAID_CLIENT_ID = os.getenv('PLAID_CLIENT_ID')
# # PLAID_SECRET = os.getenv('PLAID_SECRET')
# # # Use 'sandbox' to test with Plaid's Sandbox environment (username: user_good,
# # # password: pass_good)
# # # Use `development` to test with live users and credentials and `production`
# # # to go live
# # PLAID_ENV = os.getenv('PLAID_ENV', 'sandbox')
# # # PLAID_PRODUCTS is a comma-separated list of products to use when initializing
# # # Link. Note that this list must contain 'assets' in order for the app to be
# # # able to create and retrieve asset reports.
# # PLAID_PRODUCTS = os.getenv('PLAID_PRODUCTS', 'transactions').split(',')

# # # PLAID_COUNTRY_CODES is a comma-separated list of countries for which users
# # # will be able to select institutions from.
# # PLAID_COUNTRY_CODES = os.getenv('PLAID_COUNTRY_CODES', 'US').split(',')

# # products = []
# # for product in PLAID_PRODUCTS:
# #     products.append(Products(product))

# # def empty_to_none(field):
# #     value = os.getenv(field)
# #     if value is None or len(value) == 0:
# #         return None
# #     return value

# # PLAID_REDIRECT_URI = empty_to_none('PLAID_REDIRECT_URI')

# # host = plaid.Environment.Sandbox

# # if PLAID_ENV == 'sandbox':
# #     host = plaid.Environment.Sandbox

# # if PLAID_ENV == 'development':
# #     host = plaid.Environment.Development

# # if PLAID_ENV == 'production':
# #     host = plaid.Environment.Production

# # configuration = plaid.Configuration(
# #     host=host,
# #     api_key={
# #         'clientId': PLAID_CLIENT_ID,
# #         'secret': PLAID_SECRET,
# #         'plaidVersion': '2020-09-14'
# #     }
# # )

# # api_client = plaid.ApiClient(configuration)
# # client = plaid_api.PlaidApi(api_client)

# app = Flask(__name__)

# @app.route('/', methods=['GET'])
# def root():
#     return jsonify({
#       'item_id': 'test',
#   })
#   # try:
#   # self.send_response(200)
#   # self.send_header('Content-type','text/plain')
#   # self.end_headers()
#   # self.wfile.write('Hello, world!'.encode('utf-8'))

#   # return
#   # request = LinkTokenCreateRequest(
#   #     products=products,
#   #     client_name="Plaid Quickstart",
#   #     country_codes=list(map(lambda x: CountryCode(x), PLAID_COUNTRY_CODES)),
#   #     language='en',
#   #     user=LinkTokenCreateRequestUser(
#   #         client_user_id=str(time.time())
#   #     )
#   # )
#   # if PLAID_REDIRECT_URI!=None:
#   #     request['redirect_uri']=PLAID_REDIRECT_URI
#   # create link token
#       # response = client.link_token_create(request)
#       # return jsonify(response.to_dict())
#   # except plaid.ApiException as e:
#   #     return json.loads(e.body)

# if __name__ == '__main__':
#     app.run(port=int(os.getenv('PORT', 8001)))
