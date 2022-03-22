#!/bin/zsh

sass --watch index.scss:index.css &

echo ">>> Haml is watching for changes. Press Ctrl-C to stop.";

md5=$(md5sum index.haml);
while true; 
do 
	sleep 0.2;
	new_md5=$(md5sum $(ls *haml));
	if [ "$md5" != "$new_md5" ];
	then
		md5=$new_md5;
    echo ">>> Change detected to: a haml file"
		echo "      \033[;32mwrite index.html\033[0m"
    ./render.rb > /dev/null 2>&1
	fi
done;
