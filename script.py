import undetected_chromedriver as chr
import urllib.parse 

def login(d,u,p):
  d.find_element_by_id("loginForLoginFom").send_keys(u)
  d.find_element_by_id("passwordForLoginForm").send_keys(p)
  d.find_element_by_name("do_login").click()



d = chr.Chrome(version_main = 109)
d.get("https://ficbook.net")
print(urllib.parse.quote(d.page_source))
