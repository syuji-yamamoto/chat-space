source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails', '~> 5.0.7', '>= 5.0.7.2'
gem 'mysql2', '>= 0.3.18', '< 0.6.0'
gem 'puma', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'jquery-rails'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'devise'
gem 'haml-rails'
gem 'erb2haml'
gem 'font-awesome-rails'
gem 'carrierwave'
gem 'mini_magick'
gem 'fog-aws'

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'rspec-rails'
  gem 'rails-controller-testing'
  gem 'factory_bot_rails'
  gem 'factory_girl_rails'
  gem 'faker'
  gem 'capistrano'
  gem 'capistrano-rbenv'
  gem 'capistrano-bundler'
  gem 'capistrano-rails'
  gem 'capistrano3-unicorn'

end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'rspec'
end

group :test do
  gem 'rspec'
  gem 'faker'
end

group :production do
  gem 'unicorn', '5.4.1'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
