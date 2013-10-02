require 'rubygems'

require 'selenium-webdriver'
require 'service_manager'


desc 'Run Jasmine tests with Phantomjs'
task :testJs do
  sh %{phantomjs lib/phantom-jasmine/run_jasmine_test.coffee SpecRunner.html}
end
