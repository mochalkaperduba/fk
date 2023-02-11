import undetected_chromedriver as chr
chr.install(
    executable_path = 'ccd/chromedriver.exe'
    )
d = chr.Chrome()
res = d.get("https://ficbook.net")
