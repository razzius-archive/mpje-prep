(ns mpje-prep.components
  (:require [sablono.core :as sab]))


(defn mpje-prep [data]
  (sab/html [:div
             [:h1 "MPJE Prep"]
             (if (nil? (:question @data))
                    "no quesin"
                    (:question @data)
                    )]))
