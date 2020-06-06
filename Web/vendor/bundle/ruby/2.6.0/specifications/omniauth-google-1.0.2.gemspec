# -*- encoding: utf-8 -*-
# stub: omniauth-google 1.0.2 ruby lib

Gem::Specification.new do |s|
  s.name = "omniauth-google".freeze
  s.version = "1.0.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["apps@yesware.com".freeze]
  s.date = "2012-10-12"
  s.description = "A Google OAuth strategy for OmniAuth 1.0".freeze
  s.email = "info@yesware.com".freeze
  s.extra_rdoc_files = ["LICENSE.txt".freeze, "README.md".freeze]
  s.files = ["LICENSE.txt".freeze, "README.md".freeze]
  s.homepage = "http://github.com/Yesware/omniauth-google".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.0.3".freeze
  s.summary = "A Google OAuth strategy for OmniAuth 1.0".freeze

  s.installed_by_version = "3.0.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<omniauth>.freeze, ["~> 1.0"])
      s.add_runtime_dependency(%q<omniauth-oauth>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<multi_json>.freeze, [">= 0"])
      s.add_development_dependency(%q<bundler>.freeze, [">= 0"])
      s.add_development_dependency(%q<jeweler>.freeze, [">= 0"])
      s.add_development_dependency(%q<rack-test>.freeze, [">= 0"])
      s.add_development_dependency(%q<rspec>.freeze, [">= 0"])
      s.add_development_dependency(%q<webmock>.freeze, [">= 0"])
    else
      s.add_dependency(%q<omniauth>.freeze, ["~> 1.0"])
      s.add_dependency(%q<omniauth-oauth>.freeze, [">= 0"])
      s.add_dependency(%q<multi_json>.freeze, [">= 0"])
      s.add_dependency(%q<bundler>.freeze, [">= 0"])
      s.add_dependency(%q<jeweler>.freeze, [">= 0"])
      s.add_dependency(%q<rack-test>.freeze, [">= 0"])
      s.add_dependency(%q<rspec>.freeze, [">= 0"])
      s.add_dependency(%q<webmock>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<omniauth>.freeze, ["~> 1.0"])
    s.add_dependency(%q<omniauth-oauth>.freeze, [">= 0"])
    s.add_dependency(%q<multi_json>.freeze, [">= 0"])
    s.add_dependency(%q<bundler>.freeze, [">= 0"])
    s.add_dependency(%q<jeweler>.freeze, [">= 0"])
    s.add_dependency(%q<rack-test>.freeze, [">= 0"])
    s.add_dependency(%q<rspec>.freeze, [">= 0"])
    s.add_dependency(%q<webmock>.freeze, [">= 0"])
  end
end
