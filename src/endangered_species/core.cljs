(ns endangered-species.core
    (:require 
      [reagent.core :as r]
      [ajax.core :refer [GET POST]]))

(defonce global-state (r/atom {:access-token "" 
                               :access-token-timer 3600
                               :client-id "leeondamiky-uzchw"
                               :client-secret "Xb8WheKByt61bGDwipwx"
                               :base-url "https://anilist.co/api/"
                               :search-result []
                               :value "Search!"}))

(defn get-access-token []
  (POST (str (:base-url @global-state) "auth/access_token")
        {:format :url         
         :response-format :json 
         :keywords? true
         :params {:grant_type "client_credentials"
                  :client_id (:client-id @global-state)
                  :client_secret (:client-secret @global-state)}
         :handler #(swap! global-state update :access-token (fn [_] (:access_token %)))
         :error_handler #(println "Error: " %)}))

(defn search [query]
  (if 
    (clojure.string/blank? query)
    (swap! global-state update :search-result (fn [_] []))
    (GET (str (:base-url @global-state) (str "character/search/" query))
         {:response-format :json 
          :params {:access_token (:access-token @global-state)}
          :keywords? true
          :handler #(when (not (clojure.string/blank? (:value @global-state))) 
                      (swap! global-state update :search-result (fn [_] %)))
          :error_handler #(println "Error: " %)})))

(defn character-item [{:keys [image_url_med image_url_lge name_first name_last name_alt name_japanese info] :as character}]
  [:div {:className "twelve columns"}
   [:div {:className "row"}
    [:div {:className "four columns"}
     [:img {:src image_url_lge :style {:width "80%"}}]]

    [:div {:className "eight columns"}
     [:h3 (str "Full Name: " name_first " " name_last)]
     [:h5 (str "Japanese Name: " name_japanese)]
     [:p {:style {:maxHeight "200px" :overflowX "scroll"}} info]]]])

(defn home-page []
  (let [{:keys [access-token access-token-timer]} @global-state]
    (fn []
      [:div {:class "container" :style {:textAlign "center"}}

       [:img {:style {:width "100%" :marginTop "40px"}
              :src "http://i.imgur.com/QwuYL82.png"}]

       [:p {:style {:textAlign "center"}} 
        "Time until access token expires: " (:access-token-timer @global-state)]

       [:input {:type "text"
                :value (:value @global-state)
                :on-change (fn [x]
                             (let [cur-val (-> x .-target .-value)]
                               (do 
                                 (search cur-val)
                                 (swap! global-state update :value (fn [_] cur-val)) 
                                 )))
                :style {:width "70%" :height "40px" :fontSize "2em"}
                :className "u-half-width"}]

       [:div {:className "row"}
        (for [character (:search-result @global-state)]
          ^{:key (:id character)}[character-item character])]])))

(defn mount-root []
  (get-access-token)
  (js/setInterval #(swap! global-state update :access-token-timer dec) 1000)
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

(comment 

  (def search-cache (atom {}))

  (keys (first (:search-result @global-state)))
  (first @search-cache)
  (keys (first @search-cache))
  (swap! global-state update :search-result (fn [_] @search-cache))

  (GET (str (:base-url @global-state) "character/search/ichigo")
       {:response-format :json 
        :params {:access_token (:access-token @global-state)}
        :keywords? true
        :handler #(reset! search-cache %)
        :error_handler #(println "Error: " %)})

  (empty? "")
  )

