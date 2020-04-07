Rails.application.routes.draw do
  devise_for :users
  resources :places, :reports
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "bootstrap", to: "reports#bootstrap"
  root 'reports#index'
end
