import undetected_chromedriver as chr
d = chr.Chrome(version_main = 109)
res = d.get("https://ficbook.net")
