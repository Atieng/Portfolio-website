import sys, re
# usage: python3 scripts/add.py projects|experience|community  < entry
name = sys.argv[1]
entry = sys.stdin.read().rstrip()
path = "data/projects.js"
src = open(path, encoding="utf-8").read()
m = re.search(r"export const " + name + r" = \[", src)
if not m:
    sys.exit("list not found: " + name)
end = src.index("\n];", m.end())
if not entry.endswith(","):
    entry += ","
open(path, "w", encoding="utf-8").write(src[:end] + "\n" + entry + src[end:])
print("added to", name)
