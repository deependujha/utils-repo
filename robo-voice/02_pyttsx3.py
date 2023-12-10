import pyttsx3

# Initialize the pyttsx3 engine
engine = pyttsx3.init()

# Generate the speech and save it to a file
text = "This text is being spoken by pyttsx3"
filename = '02_pyttsx3Audio.wav'

engine.save_to_file(text, filename )
engine.runAndWait()