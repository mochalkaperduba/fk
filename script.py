import undetected_chromedriver as chr
d = chr.Chrome(version_main = 109)
d.get("https://ficbook.net")
print(repr(d))
