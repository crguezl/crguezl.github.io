desc "Publicar en GitHub CV"
task :default do
  sh "git ci -am 'CV 2020/2021' && git push"
end

desc "serve locally"
task :serve do
  sh "bundle exec jekyll serve --future --drafts --livereload --livereload-port 5555 --watch --host 0.0.0.0 --port 4444"
end

task :updatebundler do
  sh "bundle update --bundler"
end

