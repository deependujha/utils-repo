
import subprocess

def speak(text, filename):
    # to say the text
    # subprocess.call(['espeak', text]) 

    # to save the text as a mp3 file
    subprocess.call(['espeak', '-w', filename, text])


text = "Hello world, I am espeak"

# filename can be `mp3` or `wav`
filename="01_espeakAudio.mp3" 

speak(text, filename)