import re

# Read the file
with open('/Users/elixi/iosskillsmatrix/magicpath-project (6)/src/components/generated/SkillsMatrix.tsx', 'r') as f:
    content = f.read()

# Find the three specific sections and upgrade DS: 1 to DS: 2
# We'll do this by finding each section and replacing DS: 1, with DS: 2, within that section

# Pattern to match a category section
def upgrade_ds_in_section(content, section_title):
    # Find the section
    section_pattern = rf"title: '{re.escape(section_title)}',[^}}]*skills: \[(.*?)\]"

    def replace_ds_ones(match):
        section_content = match.group(0)
        # Replace DS: 1, with DS: 2, in this section only
        updated_section = re.sub(r'\bDS: 1,', 'DS: 2,', section_content)
        return updated_section

    content = re.sub(section_pattern, replace_ds_ones, content, flags=re.DOTALL)
    return content

# Upgrade DS values in the three specified domains
content = upgrade_ds_in_section(content, 'Talent Systems (TA, Performance, Talent Mgmt, L&D)')
content = upgrade_ds_in_section(content, 'Org Development, Culture & EX')
content = upgrade_ds_in_section(content, 'Workforce Planning & Org Design')

# Write back
with open('/Users/elixi/iosskillsmatrix/magicpath-project (6)/src/components/generated/SkillsMatrix.tsx', 'w') as f:
    f.write(content)

print("Successfully updated DS values from 1 to 2 in Talent Systems, Org Development, and Workforce Planning domains")
