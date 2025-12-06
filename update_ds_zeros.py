import re

# Read the file
with open('/Users/elixi/iosskillsmatrix/magicpath-project (6)/src/components/generated/SkillsMatrix.tsx', 'r') as f:
    content = f.read()

# Define specific DS: 0 -> DS: 1 or DS: 2 updates based on skill category context
# We'll update DS: 0 to DS: 1 for most areas, DS: 2 for important research-adjacent areas

# Skills where DS should have at least 1 (awareness/understanding)
updates = [
    # Human factors / ergonomics - basic awareness
    (r"name: 'Human factors / ergonomics fundamentals[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),

    # Talent Systems - operational understanding
    (r"name: 'Candidate experience & assessment operations[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),
    (r"name: 'Onboarding & socialization design[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),

    # Learning & Development - understanding for research purposes
    (r"name: 'Learning needs analysis[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),
    (r"name: 'Instructional design[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),
    (r"name: 'Facilitation / training delivery[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),
    (r"name: 'Learning tech literacy[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),
    (r"name: 'Coaching & mentoring program design[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),
    (r"name: 'Learning product management[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),

    # OD, Culture & EX - understanding organizational context
    (r"name: 'Change management[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),
    (r"name: 'Facilitation & group process[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),
    (r"name: 'Team effectiveness[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),
    (r"name: 'Leadership & culture levers[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),
    (r"name: 'Employee experience design[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),
    (r"name: 'Conflict resolution & mediation[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),
    (r"name: 'Well-being / psychosocial risk management[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 2,')),

    # Workforce Planning - important for research
    (r"name: 'Organizational design[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),
    (r"name: 'Labor market analytics[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 2,')),

    # Business, Consulting & Communication - awareness
    (r"name: 'Facilitation & workshop design[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),
    (r"name: 'Change communication[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),

    # Work Design - basic understanding
    (r"name: 'Task analysis & workflow mapping[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),
    (r"name: 'Usability testing / HCI methods[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),
    (r"name: 'Ergonomics & physical risk assessment[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),
    (r"name: 'Cognitive workload & human error analysis[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 2,')),
    (r"name: 'Safety culture & incident learning[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),
    (r"name: 'Shiftwork, fatigue & workload management[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),
    (r"name: 'Human–automation interaction[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),
    (r"name: 'Participatory design & co-creation[^}]+DS: 0,",
     lambda m: m.group(0).replace('DS: 0,', 'DS: 1,')),
]

# Apply each update
for pattern, replacement in updates:
    content = re.sub(pattern, replacement, content, flags=re.DOTALL)

# Write back
with open('/Users/elixi/iosskillsmatrix/magicpath-project (6)/src/components/generated/SkillsMatrix.tsx', 'w') as f:
    f.write(content)

print("Successfully updated DS values - removed most 0s")
