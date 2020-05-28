# Project3EndOfYear

To run this project, please first check if ruby is installed:

$ ruby -v

Do the same with Rails and sqlite3:

$ rails --version
$ sqlite3 --version

If the case one of these is not installed you can found below the procedure to install each component (for Fedora).

Install ruby from RubyGems.org:

$ sudo dnf group install "C Development Tools and Libraries"
$ sudo dnf install ruby-devel zlib-devel
$ gem install rails

Install Rails from Fedora official repository:

$ sudo dnf install rubygem-rails
$ sudo dnf group install 'Ruby on Rails'

To install SQlite, simply type:

$ sudo dnf install sqlite

To install Webpackager, use this in your project repository:

$ bundle exec rake webpacker:install

Once everything his installed, after dowloading the repository, install all dependencies with (it might take some time):

$ bundle install

Afterall dependencies are installed, you're ready to run the project.
Create the Database and start the serveur.

$ rails db:migrate
$ rails s (or rails server)

The website is at localhost:3000