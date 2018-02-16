(ns mpje-prep.components
  (:require [clojure.string :refer [join]]
            [sablono.core :as sab]
            [om.dom :as dom]
            [om.next :as om :refer [defui]]
            [mpje-prep.questions :refer [questions]]
            [mpje-prep.control :refer [check-question next-question]]))

(def header [:h1.header "MPJE Prep"])

;todo
(defui AutoFocusingButton
  Object
  (componentDidMount [this] (.focus this))
  (render [this] (dom/button {:id "next"} "click me")))

(def auto-focusing-button (om/factory AutoFocusingButton))

(defn page-layout [& contents]
  [:div.container header contents])

(defn format-correct [answer]
  (if (string? answer)
    (str "Wrong. Correct answer: " answer)
    (str "Wrong. Acceptable answers: " (join ", " answer))))

(defn question-form [data question]
  [:form {:id "form" :on-submit (partial check-question data) :auto-complete "off"}
   [:p (:question question)]
   (if (:other-options question)
     (for [option (:shuffled-options @data)]
       [:div 
        [:label {:key option} [:input {:type "radio" :name "options" :value option}] option]])
     [:input#answer {:placeholder "Type and press enter"}])
   [:input {:type "submit"}]])

(defn mpje-prep [data]
  (sab/html
   (page-layout
     (cond
       (and (not (:answered @data))(= (count (:finished @data)) (count questions)))
       [:div "You've answered all the questions correctly!"]

       (nil? (:question-number @data))
       [:button {:on-click (partial next-question data)} "Click here!"]

       true
       (let [question-number (:question-number @data)
             question (nth questions question-number)]
         [:div
          [:small (- (count questions) (count (:finished @data))) " remaining"]
          (question-form data question)
          (if (:answered @data)
            [:div
             (if (:correct @data)
               (str "Correct! " (if (:note question) (str "Note: " (:note question))))
               (format-correct (:answer question)))
             [:div [:button#next {:on-click (partial next-question data)} "Next Question"]]])])))))
