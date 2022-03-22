#!/usr/bin/ruby
# https://stackoverflow.com/questions/6125265/using-layouts-in-haml-files-independently-of-rails
require 'Haml'

def render(partial, locals = {})
  Haml::Engine.new(File.read("#{partial}.haml")).render(Object.new, locals)
end

str = render 'index'
File.write('index.html', str)
