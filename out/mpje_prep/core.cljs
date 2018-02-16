(ns mpje-prep.core
  (:require [sablono.core :as sab]
            [mpje-prep.components :refer [mpje-prep]]))

(def app-state (atom {:question nil}))

(defn render! []
  (.render js/ReactDOM
    (mpje-prep app-state)
    (.getElementById js/document "app")))

(add-watch app-state :on-change (fn [_ _ _ _] (render!)))

(render!)
