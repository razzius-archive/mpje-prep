(ns mpje-prep.control
  (:require [clojure.string :refer [lower-case]]
            [clojure.set :refer [difference]]
            [mpje-prep.questions :refer [questions]]))

(defn check-question [app-state event]
  (do
    (.preventDefault event)
    (let [question-number (:question-number @app-state)
          question (nth questions question-number)
          answer (if (:other-options question)
                   (-> js/document (.getElementById "form") .-elements .-options .-value)
                   (-> js/document (.getElementById "answer") .-value lower-case))
          expected (:answer question)
          correct (if (string? expected)
                    (= expected answer)
                    (expected answer))]
      ; todo compose
      (do
        (swap! app-state assoc :correct correct :answered true)
        (if correct
          (swap! app-state update-in [:finished] #(conj % question-number)))))))

(defn next-question [app-state]
  (let [n-finished (count (:finished @app-state))
        n-questions (count questions)]
    (if (= n-finished n-questions)
      ; looks hacky (game is done, do not show form stuff)
      (swap! app-state assoc :answered false)

      (let [question-number (rand-nth (vec
                                        (difference
                                          (set (range (count questions)))
                                          (:finished @app-state)
                                          (if (not= 1 (- n-questions n-finished))
                                            #{(:question-number @app-state)}))))
            question (nth questions question-number)
            other-options (:other-options question)
            shuffled-options (if other-options (shuffle (conj other-options (:answer question))))]
          (swap! app-state assoc
            :correct false
            :answered false
            :question-number question-number
            :shuffled-options shuffled-options)
          (some-> js/document (.getElementById "answer") (set! -value ""))))))
