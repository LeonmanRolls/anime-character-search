(ns endangered-species.prod
  (:require [endangered-species.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
