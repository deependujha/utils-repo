from gtts import gTTS

# The text that you want to convert to audio
mytext = 'Kritrim AI is the next big thing in the world of AI & robotics.'

# # Language in which you want to convert
language = 'en'


# Passing the text and language to the engine,
# here we have marked slow=False. Which tells
# the module that the converted audio should
# have a high speed

# tld -> top-level domain (for local accent)
myobj = gTTS(text=mytext, lang=language, slow=False, tld="co.in")


# Saving the converted audio in a mp3 file named
# welcome
myobj.save("03_gttsAudio.mp3") 