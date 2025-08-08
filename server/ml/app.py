from flask import Flask, request, jsonify
from predict_feedback import predict_feedback
from predict_attendance import predict_attendance
from manage_resources import manage_resources
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/predict-feedback', methods=['POST'])
def feedback_prediction():
    data = request.json
    print("📩 Received in Flask:", data)  
    prediction = predict_feedback(data)
    print("🤖 Prediction:", prediction)   
    return jsonify({'prediction': prediction})

@app.route('/predict/attendance', methods=['POST'])
def attendance_prediction():
    data = request.json
    prediction = predict_attendance(data)
    return jsonify({'prediction': prediction})

@app.route('/predict/resources', methods=['POST'])
def resource_prediction():
    data = request.json
    prediction = manage_resources(data)
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(port=8000, debug=True)
