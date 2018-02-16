(ns mpje-prep.core
  (:require [sablono.core :as sab]
            [mpje-prep.questions :refer [questions]]
            [mpje-prep.components :refer [mpje-prep]]))

(def starting-number (rand-int (count questions)))
(def starting-question (nth questions starting-number))

; todo move setup to a random generator fn
(defonce app-state (atom {:question-number starting-number
                          :answered false
                          :correct false
                          :shuffled-options (shuffle (conj
                                                       (:other-options starting-question)
                                                       (:answer starting-question)))
                          :finished #{}}))

(defn render! []
  (.render js/ReactDOM
           (mpje-prep app-state)
           (.getElementById js/document "app")))

(add-watch app-state :on-change (fn [_ _ _ _] (render!)))

(render!)
