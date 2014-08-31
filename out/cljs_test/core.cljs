(ns cljs-test.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [cljs.core.async :refer [put! chan <!]]))

(enable-console-print!)

(defn listen [el type]
  (let [out (chan)]
    (events/listen el type
                   (fn [ev] (put! out ev)))
    out))

(defn consumer [in]
  (let [out (chan)]
    (go (loop [v (<! in)]
          (put! out (.-type v))
          (recur (<! in))))
    out))

(let [clicks (listen (dom/getElement "test") "click")
      derp (consumer clicks)]
  (go (while true
        (.log js/console (<! derp)))))
