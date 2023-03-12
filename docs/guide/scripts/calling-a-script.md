# Calling a script

Suppose your Sway script `main` function is written using the arguments passed to the `main` function like so:



You can still hand code out a solution wrapper using `callScript` utility to call your script with data. However, if you prefer to use the ABI generated from your script, you can use the `ScriptFactory` helper:


