utf8stdout = open(1, "w", encoding="utf-8", closefd=False)


def print_error(msg):
    with open("static/template.html", "r", encoding="utf-8") as file:
        s = file.read()
        print(s.format(msg), file=utf8stdout)
    exit()
