# Robo Voice (Python text to speech) 🤖

![robo](./images/robo.jpg)

## 1. Using `espeak` command-line tool (`works offline`)

- `eSpeak is a command-line tool for Linux that converts text to speech`.

- This compact speech synthesizer provides support for English and many other languages. It is written in C.

- eSpeak reads the text from the standard input or input file. The voice generated, however, is nowhere close to a human voice. But it is still a compact and handy tool if you want to use it in your projects.

- **Works offline**

- install in ubuntu/debian based distros

```sh
sudo apt-get install espeak
```

- Then, to use it in command line:

```sh
# to say "hello world"
espeak "hello world"

# to save the audio in a file without saying it
espeak -w abc.wav "hello world"
```

- To use it in python code, we need to use `subprocess` module:

```python

import subprocess

def speak(text, filename):
    # to say the text
    # subprocess.call(['espeak', text]) 

    # to save the text as a mp3 file
    subprocess.call(['espeak', '-w', filename, text])


text = "Greetings, citizens. This is a message from your friendly neighborhood hacktivist. We have uncovered evidence that your government is attempting to use your country's reserves for their personal gains. This is unacceptable and we will not stand idly by while you are robbed of your rightful resources. We urge you to take action and demand transparency and accountability from your leaders. Together, we can fight against corruption and build a better future for all. Stay vigilant, stay united, and stay strong."

filename="anonymous_hacker.mp3"

speak(text, filename)
```

---

## 2. Using `pyttsx3` library (`works offline`)

- installation

```sh
pip install pyttsx3
```

- Install `libespeak` library in your linux

```sh
sudo apt install libespeak-dev
```

- a simple code for speaking text

```python
import pyttsx3

engine = pyttsx3.init()
engine.say("I will speak this text")
engine.runAndWait()

```

- code for saving the converted text

```python
import pyttsx3

# Initialize the pyttsx3 engine
engine = pyttsx3.init()

# Generate the speech and save it to a file
text = "I will speak this text"
filename = 'myaudio.wav'
engine.save_to_file(text, filename )
engine.runAndWait()

```

- Changing Voice , Rate and Volume :

```python
import pyttsx3
engine = pyttsx3.init() # object creation

""" RATE"""
rate = engine.getProperty('rate')   # getting details of current speaking rate
print (rate)                        #printing current voice rate
engine.setProperty('rate', 125)     # setting up new voice rate


"""VOLUME"""
volume = engine.getProperty('volume')   #getting to know current volume level (min=0 and max=1)
print (volume)                          #printing current volume level
engine.setProperty('volume',1.0)    # setting up volume level  between 0 and 1

"""VOICE"""
voices = engine.getProperty('voices')       #getting details of current voice
#engine.setProperty('voice', voices[0].id)  #changing index, changes voices. o for male
engine.setProperty('voice', voices[1].id)   #changing index, changes voices. 1 for female

engine.say("Hello World!")
engine.say('My current speaking rate is ' + str(rate))
engine.runAndWait()
engine.stop()

"""Saving Voice to a file"""
# On linux make sure that 'espeak' and 'ffmpeg' are installed
engine.save_to_file('Hello World', 'test.mp3')
engine.runAndWait()
```

- For more advance usage: [pyttsx3 - visit here](https://pypi.org/project/pyttsx3/)

---

## 3. Using `gTTS` library (`works online only`)

- gTTS -> **google text to speech**

- Installation

```sh
pip install gTTS
```

- Basic usage:

```python

from gtts import gTTS

# The text that you want to convert to audio
mytext = 'Kritrim AI is the next big thing in the world of AI & robotics.'

# # Language in which you want to convert
language = 'en'


# Passing the text and language to the engine,
# here we have marked slow=False. Which tells
# the module that the converted audio should
# have a high speed
myobj = gTTS(text=mytext, lang=language, slow=False, tld="co.in")

# Saving the converted audio in a mp3 file named
# welcome
myobj.save("myaudio_gtts.mp3") 

```

- For more advance usage: [gtts - visit here](https://gtts.readthedocs.io/en/latest/index.html)

---

## To try out this project 😃

- Install all the required libraries:

```sh
pip install -r requirements.txt
```

---

# wav Vs mp3 🎵

- **WAV (Waveform Audio File Format)** and **MP3 (MPEG Audio Layer-3)** are both audio file formats, but they have some important differences.

- **WAV is an uncompressed audio format**, which means that the file size is generally larger than MP3 files. WAV files have a high-quality sound and are ideal for recording and editing music or other audio files. However, because of their large size, WAV files may not be suitable for streaming or sharing over the internet.

- **MP3**, on the other hand, is **a compressed audio format** that uses lossy compression to reduce the file size. This means that some of the audio data is lost during compression, resulting in a lower quality sound compared to WAV files. However, MP3 files are much smaller in size than WAV files, making them ideal for streaming and sharing over the internet.

- In summary, if you need high-quality audio with no loss of data, then WAV is a good choice. However, if you need to share or stream audio files over the internet, then MP3 is a more practical choice because of its smaller file size.

- ### High quality & good for editing - wav fils
- ### Good for sharing & streaming - mp3 files