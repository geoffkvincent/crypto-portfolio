Rails.application.routes.draw do
  namespace :api do
    get 'coins/index'
    get 'coins/create'
    get 'coins/show'
    get 'coins/update'
  end
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    #API ROUTES SHOULD GO HERE
  end

  #Do not place any routes below this one
  if Rails.env.production?
    get '*other', to: 'static#index'
  end
end
