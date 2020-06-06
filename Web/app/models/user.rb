class User < ApplicationRecord

  attr_accessor :login

  validates :username, presence: true, uniqueness: {case_sensitive: false }, format: { with: /\A[a-zA-Z0 _\.]*\z/}

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :trackable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable
  devise :omniauthable, omniauth_providers: [:facebook, :twitter, :google_oauth2]

  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session[“devise.facebook_data”] && session[“devise.facebook_data”][“extra”][“raw_info”]
        user.email = data[“email”] if user.email.blank?
      end
    end
  end

  def self.find_first_by_auth_conditions(warden_conditions)
    cond = warden_conditions.dup
    if login == cond.delete(:login)
      where(cond.to_hash).where("lower(username) = :value OR lower(email) = :value", value: login.downcase).first
    else
      where(cond.to_hash).first
    end
  end

  def self.from_facebook(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0, 20]
      user.username = auth.info.name
      user.skip_confirmation!
    end
  end

  def self.from_google(email:, full_name:)
    create_with(username: full_name).find_or_create_by!(email: email)
  end
end
