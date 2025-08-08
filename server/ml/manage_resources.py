def manage_resources(data):
    attendees = int(data.get("expectedAttendees", 100))
    chairs = attendees
    water = attendees * 0.5
    return {
        "chairs": chairs,
        "water_liters": water
    }
