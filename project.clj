(defproject mpje-prep "0.0.1"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.9.908"]
                 [org.omcljs/om "1.0.0-beta1"]
                 [cljsjs/react "15.2.1-1"]
                 [cljsjs/react-dom "15.2.1-1"]
                 [sablono "0.7.4"]]
  :plugins [[lein-figwheel "0.5.15-SNAPSHOT"]
            [lein-kibit "0.1.5"]
            [lein-cljfmt "0.5.7"]]
  :source-paths ["src"]
  :profiles {:dev {:dependencies [[figwheel-sidecar "LATEST"]
                                  [com.cemerick/piggieback "LATEST"]]}}
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :clean-targets ^{:protent false} [:target-path "resources/public/cljs"]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main "mpje-prep.core"
                                   :asset-path "cljs/out"
                                   :output-to "resources/public/cljs/main.js"
                                   :output-dir "resources/public/cljs/out"}}]}
  :figwheel {:css-dirs ["resources/public/css"]})

