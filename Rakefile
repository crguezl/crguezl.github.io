desc "Publicar en GitHub CV"
task :default do
  sh "git ci -am 'CV 2020/2021' && git push"
end

desc "serve locally"
task :serve do
  sh "bundle exec jekyll serve --future --watch --host 0.0.0.0 --port 4000"
end

task :updatebundler do
  sh "bundle update --bundler"
end

