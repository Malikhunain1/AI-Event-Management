def predict_attendance(data):
    expected = int(data.get("expectedAttendees", 100))
    predicted = expected - 50  # Dummy logic
    return f"Predicted actual attendance: {predicted}"
