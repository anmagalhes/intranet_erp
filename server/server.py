from flask import Flask, jsonify

#app instance
app = Flask(__name__)

#api/home
@app.route('/api/data')
def get_data():
    data = {"message": "Hello from Flask!"}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
