require 'open-uri'
require 'news-api'

module HomeHelper
  def news
    url = 'http://newsapi.org/v2/top-headlines?'\
      'country=us&'\
      'apiKey=5f7bf5b89bf047e2af71798d8984f30b'
    req = open(url)
    response_body = JSON.parse(req.read)
  end

  def news_apple
    url = 'http://newsapi.org/v2/everything?'\
      'q=Apple&'\
      'from=2020-06-20&'\
      'sortBy=popularity&'\
      'apiKey=5f7bf5b89bf047e2af71798d8984f30b'
    req = open(url)
    response_body = JSON.parse(req.read)
  end

  def news_google
    url = 'http://newsapi.org/v2/everything?'\
      'q=Google&'\
      'from=2020-06-20&'\
      'sortBy=popularity&'\
      'apiKey=5f7bf5b89bf047e2af71798d8984f30b'
    req = open(url)
    response_body = JSON.parse(req.read)
  end

  def news_bbc
    url = 'http://newsapi.org/v2/top-headlines?'\
      'sources=bbc-news&'\
      'apiKey=5f7bf5b89bf047e2af71798d8984f30b'
    req = open(url)
    response_body = JSON.parse(req.read)
  end
end
