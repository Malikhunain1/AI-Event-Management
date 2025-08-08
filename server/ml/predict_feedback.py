def predict_feedback(data):
    text = data.get("text", "").lower()

    positive_keywords = ["good", "excellent", "great", "awesome", "amazing", "fantastic", "wonderful"]
    negative_keywords = ["bad", "poor", "terrible", "worst", "boring", "disappointing"]

    if any(word in text for word in positive_keywords):
        return "Positive"
    elif any(word in text for word in negative_keywords):
        return "Negative"
    else:
        return "Neutral"
