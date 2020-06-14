require 'open-uri'

module HomeHelper
  def mediapart_news
    doc = Nokogiri::HTML(open('https://www.mediapart.fr/')).title
    doc
  end

  def google_news
    doc = Nokogiri::HTML(open('https://news.google.com')).title
    doc
  end

  def lemonde_news
    doc = Nokogiri::HTML(open('https://www.lemonde.fr/')).title
    doc
  end

  def minutes_news
    doc = Nokogiri::HTML(open('https://www.20minutes.fr/')).title
    doc
  end
end
