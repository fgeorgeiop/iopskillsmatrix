import re

# Read the file
with open('/Users/elixi/iosskillsmatrix/magicpath-project (6)/src/components/generated/SkillsMatrix.tsx', 'r') as f:
    content = f.read()

# Replace all WP: with EF: in skill objects
content = re.sub(r'\bWP: ([0-3]),', r'EF: \1,', content)

# Write the file back
with open('/Users/elixi/iosskillsmatrix/magicpath-project (6)/src/components/generated/SkillsMatrix.tsx', 'w') as f:
    f.write(content)

print("Successfully replaced all WP: with EF:")
