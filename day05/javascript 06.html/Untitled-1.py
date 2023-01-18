def speak(str):
   from win32com.client import Dispatch
   speak = Dispatch("SAPI.Spvoice")
   
   speak.Speak("str")
if __name__ == '  main ':
  speak("how are you")
