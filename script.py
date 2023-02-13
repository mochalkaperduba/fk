import undetected_chromedriver as chr
from selenium.webdriver.chrome.options import Options
import sys

def buildinvoke():
  invok = "control(["
  names = open('names.txt',mode='r',encoding="utf8")
  rln = names.readlines()
  for rl in rln:
    invok+='\"'
    invok+=rl.replace("\n", "")
    invok+='\",'
  invok+='\"'
  invok+="https://t.me/yamochalka - это я"
  invok+='\" '

  names.close()
  invok+="],["
  
  de = open('desc.txt',mode='r',encoding="utf8")
  rln = de.readlines()
  
  for rl in rln:
    invok+='\"'
    invok+=rl.replace("\n", "")
    invok+='\",'
  invok+='\"'
  invok+="https://t.me/yamochalka - это я"
  invok+='\" '

  de.close()

  invok+="])"
  return invok


def loadlogincode():
  file = open('login',mode='r',encoding="utf8")
  r = file.read()
  file.close()
  return r

def loadscode():
  file = open('wscr.js',mode='r',encoding="utf8")
  r = file.read()
  file.close()
  return r

def loadl():
  file = open('lgn',mode='r',encoding="utf8")
  r = file.readlines()
  file.close()
  return r

def login(d,u,p):
  logn = loginjs.replace("@log",u).replace("@pass",p)
  print("Logged!")
  d.execute_script(logn)

def injectjs(d):
  d.execute_script(sjs+"\n"+invoke)
  

loginjs = loadlogincode()
sjs = loadscode()
invoke = buildinvoke()
lg = loadl()

drv = []

d = chr.Chrome(version_main = 109)
d.get("https://ficbook.net")
login(d,lg[int(sys.argv[1])].replace("\n", ""),"myipis12345678")
d.refresh()
injectjs(d)
drv.append(d)
print("New Chrome Driver Started")

  
while(True):
       pass


