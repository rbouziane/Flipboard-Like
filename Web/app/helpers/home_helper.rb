require 'open-uri'
require 'news-api'

module HomeHelper
  def apple_news
    #n = News.new("5f7bf5b89bf047e2af71798d8984f30b")
    #n.get_sources(country: 'us', language: 'us')
    #n.get_everything(q: "apple",  from: "2020-06-01", sortBy: "popularity")
    #n.get_top_headlines(sources: "bbc-news")
    #req = open(n)
    #response_body = req.read
    url = 'http://newsapi.org/v2/top-headlines?'\
      'country=us&'\
      'apiKey=5f7bf5b89bf047e2af71798d8984f30b'
    req = open(url)
    response_body = req.read
    response_body
  end

  def google_news
    n = News.new("5f7bf5b89bf047e2af71798d8984f30b")
    n.get_sources(country: 'us', language: 'us')
    n.get_everything(q: "google",  from: "2020-06-01", sortBy: "popularity")
    n.get_top_headlines(sources: "bbc-news")
    puts n
  end
end
