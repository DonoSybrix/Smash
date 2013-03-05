# Create dependancies.
../../Libs/closure/closure/bin/build/depswriter.py --root_with_prefix="../../Smash/src/ ../../../../Smash/src" --output_file=../bin/deps.js

# Create compiler output.
../../Libs/closure/closure/bin/build/closurebuilder.py \
--root=../../Libs/closure/ \
--root=../../Smash/src \
--root=../../SXFramework/Engines/ \
--namespace=Application.main \
--output_mode=compiled \
--compiler_jar=../../Libs/closure/compiler.jar \
--compiler_flags=--compilation_level=ADVANCED_OPTIMIZATIONS \
--compiler_flags="--warning_level=VERBOSE" \
--output_file=../bin/smash.js