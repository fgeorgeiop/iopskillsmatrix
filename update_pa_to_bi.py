import re

# Read the file
with open('/Users/elixi/iosskillsmatrix/magicpath-project (6)/src/components/generated/SkillsMatrix.tsx', 'r') as f:
    content = f.read()

# Replace PA: with BI: in all skill objects (but not in other contexts)
# This will match patterns like "PA: 0,", "PA: 1,", "PA: 2,", "PA: 3,"
content = re.sub(r'\bPA: ([0-3]),', r'BI: \1,', content)

# Write back
with open('/Users/elixi/iosskillsmatrix/magicpath-project (6)/src/components/generated/SkillsMatrix.tsx', 'w') as f:
    f.write(content)

print("Successfully replaced all PA: properties with BI: properties")
